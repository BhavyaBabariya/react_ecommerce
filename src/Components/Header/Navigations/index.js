import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const Navigation = ()=>{
    return (
        <>
              <nav>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 navPart1">
                          <div className="catWrapper">
                              <Button className="allCatTab align-itens-center">
                                <span className='icon1 mr-2'><IoMdMenu /></span>
                                <span className="text">ALL CATEGORIES</span>
                                <span className='icon2 ml-6'><FaAngleDown /></span>
                            </Button>
                            <div className="sidebarNav">
                                  <ul>
                                    <li><Link to="/"><Button>Man</Button></Link></li>
                                    <li><Link to="/"><Button>Women</Button></Link></li>
                                    <li><Link to="/"><Button>Beauty</Button></Link></li>
                                    <li><Link to="/"><Button>Watches</Button></Link></li>
                                    <li><Link to="/"><Button>Kids</Button></Link></li>
                                  </ul>
                            </div>
                          </div>
                        </div>
                    <div className="col-sm-9 navPart2 d-flex align-items-center">
                        <ul className="list list-inline">
                            <li className="list-inline-item"><Link to='/'><Button>Home</Button></Link></li>
                            <li className="list-inline-item"><Link to='/'><Button>Men</Button></Link>
                                <div className="submenu shadow">
                                    <Link to='/'><Button>Clothing</Button></Link>
                                    <Link to='/'><Button>Footwear</Button></Link>
                                    <Link to='/'><Button>Wathches</Button></Link>
                                
                                </div>
                            </li>
                            <li className="list-inline-item"><Link to='/'><Button>Women</Button></Link>
                                 <div className="submenu shadow">
                                    <Link to='/'><Button>Clothing</Button></Link>
                                    <Link to='/'><Button>Footwear</Button></Link>
                                    <Link to='/'><Button>Wathches</Button></Link>
                                
                                </div>
                            </li>
                            <li className="list-inline-item"><Link to='/'><Button>Beauty</Button></Link></li>
                            <li className="list-inline-item"><Link to='/'><Button>Watches</Button></Link></li>
                            <li className="list-inline-item"><Link to='/'><Button>Kids</Button></Link></li>
                            <li className="list-inline-item"><Link to='/'><Button>Gifts</Button></Link></li>
                            <li className="list-inline-item"><Link to='/'><Button>Blog</Button></Link></li>
                            <li className="list-inline-item"><Link to='/'><Button>Contact </Button></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
      </nav>
        </>
    )
}
export default Navigation