import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState, useContext, forwardRef, useEffect } from 'react';
import { MyContext } from '../../App';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const context = useContext(MyContext);

  useEffect(() => {
    if (context?.countryList?.length > 0) {
      setFilteredList(context.countryList);
    }
  }, [context.countryList]);

  const selectCountry = (index) => {
    setSelectedTab(index);
    setIsOpenModel(false);
  };

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearchText(keyword);

    if (keyword.trim() === '') {
      setFilteredList(context.countryList);
      return;
    }

    const filtered = context.countryList.filter((item) =>
      item.name.toLowerCase().includes(keyword)
    );
    setFilteredList(filtered);
  };

  const selectedCountryName =
    selectedTab !== null && filteredList[selectedTab]
      ? filteredList[selectedTab].name
      : "Select";

  return (
    <>
      <Button className='contryDrop' onClick={() => setIsOpenModel(true)}>
        <div className="info d-flex flex-column">
          <span className='label'>Your Location</span>
          <span className='name'>{selectedCountryName}</span>
        </div>
        <span className='down-arrow'><FaAngleDown /></span>
      </Button>

      <Dialog
        open={isOpenModel}
        onClose={() => setIsOpenModel(false)}
        className='locationModel'
        TransitionComponent={Transition}
      >
        <div className="p-4">
          <h4 className='mb-0'>Choose your delivery location</h4>
          <p>Enter your address and we specify the offer for your area.</p>
          <Button className='close' onClick={() => setIsOpenModel(false)}>
            <IoMdCloseCircleOutline />
          </Button>

          <div className="headerSearch location-search">
            <input
              type="text"
              placeholder="Search your area"
              value={searchText}
              onChange={filterList}
            />
            <Button><IoSearch /></Button>
          </div>

          <ul className='countryList mt-3'>
            {filteredList?.length > 0 ? (
              filteredList.map((item, index) => (
                <li key={index}>
                  <Button
                    onClick={() => selectCountry(index)}
                    className={selectedTab === index ? 'active' : ''}
                  >
                    {item.name}
                  </Button>
                </li>
              ))
            ) : (
              <li>No countries available</li>
            )}
          </ul>
        </div>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
