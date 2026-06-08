import { useState, type FC } from "react";
import "./css/PanelAdmin.css";
import {
  FaBrain,
  FaHouseMedical,
  FaUser,
  FaMessage,
  FaCircleQuestion,
  FaGears,
  FaLock,
  FaDoorClosed,
  FaBars,
  FaSearchengin,
  FaEye,
  FaCartShopping,
  FaComment,
  FaDollarSign,
} from "react-icons/fa6";

interface PanelAdminProps {}
const PanelAdmin: FC<PanelAdminProps> = ({}) => {
  const [toggle, setIsToggle] = useState<boolean>(false);

  return (
    <>
      <div className="container">
        <nav className={`navigation ${toggle && "active"}`}>
          <ul>
            <li>
              <a href="">
                <span className="icon">
                  <FaBrain size={24} />
                </span>
                <span className="title">Brand Name</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon">
                  <FaHouseMedical size={24} />
                </span>
                <span className="title">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon">
                  <FaUser size={24} />
                </span>
                <span className="title">Customers</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon">
                  <FaMessage size={24} />
                </span>
                <span className="title">Message</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon">
                  <FaCircleQuestion size={24} />
                </span>
                <span className="title">Help</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon">
                  <FaGears size={24} />
                </span>
                <span className="title">Settings</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon">
                  <FaLock size={24} />
                </span>
                <span className="title">Password</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon">
                  <FaDoorClosed size={24} />
                </span>
                <span className="title">Sign Out</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main className={`main ${toggle && "active"}`}>
        <div className="topbar">
          <div
            className={`toggle ${toggle && "active"}`}
            onClick={() => setIsToggle((state) => !state)}
          >
            <FaBars size={30} />
          </div>
          <div className="search">
            <label htmlFor="">
              <input
                type="text"
                placeholder="search here..."
              />
              <FaSearchengin />
            </label>
          </div>

          <div className="user">
            <img
              src="https://imgs.search.brave.com/en8GueUwEke4A7ecDjpRnIpFR8Y-WWOEbjzD2xCNTu0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2hvbWVw/YWdlLWZlYXR1cmUt/Y2FyZC9mb3Rvci0z/ZC1hdmF0YXIuanBn"
              alt=""
            />
          </div>
        </div>
        {/* REPLACE MAIN CONTENT FROM HERE CONTENT HERE */}
        <section className="cardBox">
          <article className="card">
            <div>
              <div className="numbers">1,042</div>
              <h5 className="cardName">Daily Views</h5>
            </div>
            <div className="iconBox">
              <FaEye />
            </div>
          </article>
          <article className="card">
            <div>
              <div className="numbers">80</div>
              <h5 className="cardName">Sales</h5>
            </div>
            <div className="iconBox">
              <FaCartShopping />
            </div>
          </article>
          <article className="card">
            <div>
              <div className="numbers">280</div>
              <h5 className="cardName">Comments</h5>
            </div>
            <div className="iconBox">
              <FaComment />
            </div>
          </article>
          <article className="card">
            <div>
              <div className="numbers">$6,042 </div>
              <h5 className="cardName">Earnings</h5>
            </div>
            <div className="iconBox">
              <FaDollarSign />
            </div>
          </article>
        </section>

        <div className="details">
          <article className="recentOrders">
            <div className="cardHeader">
              <h2>Recent Orders</h2>
              <a
                href=""
                className="btn"
              >
                View All
              </a>
            </div>
            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Star Refrigerator</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>
                    <span className="status delivered">Delivered</span>
                  </td>
                </tr>
                <tr>
                  <td>Window Coolers</td>
                  <td>$110</td>
                  <td>Due</td>
                  <td>
                    <span className="status pending">Peding</span>
                  </td>
                </tr>
                <tr>
                  <td>Speakers</td>
                  <td>$620</td>
                  <td>Paid</td>
                  <td>
                    <span className="status return">Return</span>
                  </td>
                </tr>
                <tr>
                  <td>Hp Laptop</td>
                  <td>$6000</td>
                  <td>Due</td>
                  <td>
                    <span className="status inprogress">In Progress</span>
                  </td>
                </tr>
                <tr>
                  <td>Star Refrigerator</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>
                    <span className="status delivered">Delivered</span>
                  </td>
                </tr>
                <tr>
                  <td>Window Coolers</td>
                  <td>$110</td>
                  <td>Due</td>
                  <td>
                    <span className="status pending">Peding</span>
                  </td>
                </tr>
                <tr>
                  <td>Speakers</td>
                  <td>$620</td>
                  <td>Paid</td>
                  <td>
                    <span className="status return">Return</span>
                  </td>
                </tr>
                <tr>
                  <td>Hp Laptop</td>
                  <td>$6000</td>
                  <td>Due</td>
                  <td>
                    <span className="status inprogress">In Progress</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article className="recentCustomers">
            <div className="cardHeader">
              <h2>Recent Orders</h2>
            </div>

            <table>
              <tbody>
                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img
                        src="https://imgs.search.brave.com/en8GueUwEke4A7ecDjpRnIpFR8Y-WWOEbjzD2xCNTu0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2hvbWVw/YWdlLWZlYXR1cmUt/Y2FyZC9mb3Rvci0z/ZC1hdmF0YXIuanBn"
                        alt=""
                      />
                    </div>
                  </td>

                  <td>
                    <h4>Jhon</h4>
                    <span>Italy</span>
                  </td>
                </tr>
                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img
                        src="https://imgs.search.brave.com/en8GueUwEke4A7ecDjpRnIpFR8Y-WWOEbjzD2xCNTu0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2hvbWVw/YWdlLWZlYXR1cmUt/Y2FyZC9mb3Rvci0z/ZC1hdmF0YXIuanBn"
                        alt=""
                      />
                    </div>
                  </td>

                  <td>
                    <h4>Amelia</h4>
                    <span>France</span>
                  </td>
                </tr>
                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img
                        src="https://imgs.search.brave.com/en8GueUwEke4A7ecDjpRnIpFR8Y-WWOEbjzD2xCNTu0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2hvbWVw/YWdlLWZlYXR1cmUt/Y2FyZC9mb3Rvci0z/ZC1hdmF0YXIuanBn"
                        alt=""
                      />
                    </div>
                  </td>

                  <td>
                    <h4>Martin</h4>
                    <span>India</span>
                  </td>
                </tr>
                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img
                        src="https://imgs.search.brave.com/en8GueUwEke4A7ecDjpRnIpFR8Y-WWOEbjzD2xCNTu0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2hvbWVw/YWdlLWZlYXR1cmUt/Y2FyZC9mb3Rvci0z/ZC1hdmF0YXIuanBn"
                        alt=""
                      />
                    </div>
                  </td>

                  <td>
                    <h4>Olivia</h4>
                    <span>USA</span>
                  </td>
                </tr>
                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img
                        src="https://imgs.search.brave.com/en8GueUwEke4A7ecDjpRnIpFR8Y-WWOEbjzD2xCNTu0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2hvbWVw/YWdlLWZlYXR1cmUt/Y2FyZC9mb3Rvci0z/ZC1hdmF0YXIuanBn"
                        alt=""
                      />
                    </div>
                  </td>

                  <td>
                    <h4>Amit</h4>
                    <span>Japan</span>
                  </td>
                </tr>
                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img
                        src="https://imgs.search.brave.com/en8GueUwEke4A7ecDjpRnIpFR8Y-WWOEbjzD2xCNTu0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2hvbWVw/YWdlLWZlYXR1cmUt/Y2FyZC9mb3Rvci0z/ZC1hdmF0YXIuanBn"
                        alt=""
                      />
                    </div>
                  </td>

                  <td>
                    <h4>Juan</h4>
                    <span>Colombia</span>
                  </td>
                </tr>
                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img
                        src="https://imgs.search.brave.com/en8GueUwEke4A7ecDjpRnIpFR8Y-WWOEbjzD2xCNTu0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2hvbWVw/YWdlLWZlYXR1cmUt/Y2FyZC9mb3Rvci0z/ZC1hdmF0YXIuanBn"
                        alt=""
                      />
                    </div>
                  </td>

                  <td>
                    <h4>Diana</h4>
                    <span>Malaysia</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        </div>
      </main>
    </>
  );
};

export default PanelAdmin;
