
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DatePickerOne from '../../components/Forms/DatePicker/DatePickerOne';

import BuyerNameDropdown from '../../customComponents/dropdown/BuyerNameDropdown';
import StyleNoDropDown from '../../customComponents/dropdown/StyleNoDropDown';

import SwingLineDropDown from '../../customComponents/dropdown/SwingLineDropDown';

import SwingInputSummary from '../../customComponents/table/SwingInputSummary';

const SwingInput = () => {
  return (
    <>
      <Breadcrumb pageName="Swing Input" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Swing Input
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                      <SwingLineDropDown/>

                  <BuyerNameDropdown />
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Machine Up Tine %
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Machine Up Tine"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
          
                  <StyleNoDropDown/>
                  <DatePickerOne/>
                </div>
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Actual 
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your actual"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Goal
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your goal"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  
                </div>
                


              
                
                

                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Type your message"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90" >
                          Save
                </button>
              </div>
            </form>
          </div>
        </div>

        
      </div>
      {/* <ProductionSummary/> */}
      <SwingInputSummary/>
    </>
  );
};

export default SwingInput;
