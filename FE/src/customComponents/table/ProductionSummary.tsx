import { Product } from '../../types/product';
import CA from '../../images/product/ca.png';
import Next from '../../images/product/next.png';
import Tesco from '../../images/product/Tesco.png';
import Mango from '../../images/product/mango.png';
import Raw from '../../images/product/raw.png';
import { useEffect, useState } from 'react';






const ProductionSummary = () => {
  const [productData, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const apiURL= process.env.REACT_APP_API_URL +'getProduct'
       console.log(apiURL)
      const response = await fetch(apiURL); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const productData = await response.json();
      setData(productData);
      console.log(productData)
    } catch (error) {
      
    }
  };

    return (
  
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="py-6 px-4 md:px-6 xl:px-7.5">
            <h4 className="text-xl font-semibold text-black dark:text-white">
            Top 5 Production Summary
        
            </h4>
          </div>
    
          <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
            <div className="col-span-1 flex items-center">
              <p className="font-medium">Buyer </p>
            </div>
            <div className="col-span-1 hidden items-center sm:flex">
              <p className="font-medium">Style No</p>
            </div>
            <div className="col-span-1 hidden items-center sm:flex">
              <p className="font-medium">Goal (per hour) </p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="font-medium">Actual (per hour)</p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="font-medium">Progress %</p>
            </div>
            <div className="col-span-2 flex items-center">
              <p className="font-medium">Machine Up Time</p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="font-medium">Status</p>
            </div>
          </div>
    
          {productData.map((product, key) => (
            <div
              className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
              key={key}
            >
              <div className="col-span-1 flex items-center">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="h-12.5 w-15 rounded-md">
                    <img src={product.image} alt="Product" />
                  </div>
                </div>
              </div>
            
              <div className="col-span-1 hidden items-center sm:flex">
                <p className="text-sm text-black dark:text-white">
                  {product.category}
                </p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {product.goal}
                </p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-meta-3">{product.actual}</p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-meta-3 content-center" >{((product.actual/ product.goal)*100).toFixed(2)}</p>
              </div>
              <div className="col-span-2 flex items-center">             
          
        
                <p className="text-sm text-meta-3">{(((product.actual+3)/ product.goal)*100).toFixed(2)}</p>
              </div>
              <div className="col-span-1 flex items-center">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                      product.actual> 250 
                        ? 'bg-success text-success'
                        : product.actual<250 
                        ? 'bg-danger text-danger'
                        : 'bg-warning text-warning'
                    }`}
                  >
                    ....
                  </p>
                </div>
            </div>
          ))}
        </div>
      );
}

export default ProductionSummary