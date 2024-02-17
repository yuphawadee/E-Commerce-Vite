import { useState, useContext, useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import ItemList from '../Components/Item/ItemList'
import SlideNav from '../components/SlideNav/SlideNav'
const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext)
    const [objectsToShow, setToShow] = useState(all_product)
    const [selectedItemCount, setSelectedItemCount] = useState(5); // จำนวนที่เลือกแสดง
    const [sortValue, setSortValue] = useState('none');

    const compare = (a, b, ascendingOrder) => {
        if (a < b) {
            return ascendingOrder ? -1 : 1;
        }
        if (a > b) {
            return ascendingOrder ? 1 : -1;
        }
        return 0;
    }

    const handleChange = (value) => {
        if (value == 'none') {
            setToShow([...all_product])
        } else {
            let toType, toAscending
            switch (value) {
                case 'ascending': toType = true; toAscending = true; break;
                case 'descending': toType = true; toAscending = false; break;
                case 'high': toType = false; toAscending = true; break;
                case 'low': toType = false; toAscending = false; break;
            }
            let current = [...all_product]
            current.sort((a, b) => toType ?
                compare(a.name, b.name, toAscending)
                :
                compare(a.price, b.price, toAscending))
            setToShow([...current])
        }
        setSortValue(value);
    }


    useEffect(() => {
        // กรองข้อมูลสินค้าตามจำนวนที่ผู้ใช้เลือก
        const filteredProducts = all_product.filter(
            (item) => item.category === props.category || item.brand === props.brand
        );

        // ทำการ sort ข้อมูล (ตรวจสอบ logic การ sort)
        let toType, toAscending;
        switch (sortValue) {
            case 'ascending': toType = true; toAscending = true; break;
            case 'descending': toType = true; toAscending = false; break;
            case 'high': toType = false; toAscending = true; break;
            case 'low': toType = false; toAscending = false; break;
            default: toType = true; toAscending = true; break; // ให้เป็น default เมื่อไม่มีการเลือก sort
        }
        const sortedProducts = [...filteredProducts];
        sortedProducts.sort((a, b) => toType ?
            compare(a.name, b.name, toAscending)
            :
            compare(a.price, b.price, toAscending));

        // set ค่า objectsToShow
        setToShow([...sortedProducts]);
    }, [all_product, selectedItemCount, sortValue, props.category, props.brand]);

    return (
        <div className='max-w-[1370px] m-auto p-5'>
            <div className='flex gap-5'>
                <div className='hidden xl:flex md:flex w-[35%]'>
                    <SlideNav />
                </div>
                <div>
                    <div className='flex justify-end pb-5 gap-5'>
                        <div className='flex items-center  gap-3 '>
                            <p>Sort by :</p>
                            <select onChange={(e) => handleChange(e.target.value)}
                                className='border-2 rounded '
                            >
                                <option value="none">Default</option>
                                <option value="ascending">Alphabetically, A-Z</option>
                                <option value="descending">Alphabetically, Z-A</option>
                                <option value="high">Low to high</option>
                                <option value="low">High to low</option>
                            </select>
                        </div>

                        {/* <div className='flex items-center gap-3 '>
              <p>Show:</p>
              <select
                value={selectedItemCount}
                onChange={(e) => setSelectedItemCount(Number(e.target.value))}
                className='border-2 rounded'
              >
                <option value={5}>5 items</option>
                <option value={10}>10 items</option>
                <option value={20}>20 items</option>
              </select>
            </div> */}

                    </div>
                    <div className='grid gap-5 grid-cols-2 xl:grid-cols-4 md:grid-cols-3'>
                        {objectsToShow.map((item, i) => (
                            <ItemList key={i} id={item.id} name={item.name} image={item.image} price={item.price.toLocaleString()} />
                        ))}

                    </div>
                </div>

            </div>
        </div>

    )
}

export default ShopCategory