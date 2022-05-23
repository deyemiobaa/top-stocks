import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCompanyDetails } from '../../redux/stocks/stocksInfoSlice';
import Loading from '../features/loading';
import Rejected from '../features/rejected';

export default function CompanyInfo() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.companyInfo);
  const { rejected } = useSelector((state) => state.companyInfo);
  const { data } = useSelector((state) => state.companyInfo);
  const { ticker } = useParams();

  useEffect(() => {
    dispatch(getCompanyDetails(ticker));
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (rejected) {
    return <Rejected />;
  }

  return (
    <>
      <Link to="/">
        <button type="button" className="m-14 px-4 py-2 font-semibold text-xl bg-slate-700 text-slate-200 border border-transparent border-slate-300 rounded-md shadow-sm ring-2 ring-offset-2 ring-offset-slate-900 ring-blue-500">Back to home</button>
      </Link>
      {data.map((company) => (
        <div className="bg-mainblue w-full mx-auto p-4 sm:w-4/5 shadow overflow-hidden sm:rounded-lg" key={company.symbol}>

          <div className="mb-14 max-w-md mx-auto bg-lightblue rounded-lg shadow-xl overflow-hidden sm:max-w-max ring-1 ring-slate-900/5">
            <div className="flex flex-col sm:flex-row">
              <div className="sm:shrink-0">
                <img className="w-full sm:w-[193px] h-[200px]  sm:object-cover object-center" src={company.image} width="202" height="192" alt="Company Logo" />
              </div>
              <div className="p-6 2xl:p-8 space-y-2">
                <div className="font-semibold text-xl leading-6 text-textcolor">
                  $
                  {company.symbol}
                </div>
                <a href={company.website} className="block font-bold text-base text-textcolor text-2xl leading-6 hover:underline">{company.name}</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-mainblue px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-xl font-bold text-textcolor">Current trading amount</dt>
                <dd className="mt-1 text-xl text-textcolor sm:mt-0 sm:col-span-2">{company.price}</dd>
              </div>
              <div className="bg-lightblue px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-xl font-bold text-textcolor">Market Cap</dt>
                <dd className="mt-1 text-xl text-textcolor sm:mt-0 sm:col-span-2">
                  {Number(parseFloat(company.mktCap).toFixed(2)).toLocaleString('en', {
                    minimumFractionDigits: 2,
                  })}
                </dd>
              </div>
              <div className="bg-mainblue px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-xl font-bold text-textcolor">CEO</dt>
                <dd className="mt-1 text-xl text-textcolor sm:mt-0 sm:col-span-2">
                  {company.ceo}
                </dd>
              </div>
              <div className="bg-lightblue px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-xl font-bold text-textcolor">About</dt>
                <dd className="mt-1 text-xl text-textcolor sm:mt-0 sm:col-span-2">{company.about}</dd>
              </div>
              <div className="bg-mainblue px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-xl font-bold text-textcolor">Sector</dt>
                <dd className="mt-1 text-xl text-textcolor sm:mt-0 sm:col-span-2">{company.sector}</dd>
              </div>
              <div className="bg-lightblue px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-xl font-bold text-textcolor">Website</dt>
                <dd className="mt-1 text-xl text-textcolor hover:underline sm:mt-0 sm:col-span-2">
                  <a href={company.website}>{company.website}</a>
                </dd>
              </div>
              <div className="bg-mainblue px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-xl font-bold text-textcolor">Location</dt>
                <dd className="mt-1 text-xl text-textcolor sm:mt-0 sm:col-span-2">
                  {`${company.state}, ${company.country}`}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      ))}
    </>
  );
}
