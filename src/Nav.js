import "./Nav.css"
import React, { useEffect, useState } from 'react'

function Nav() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        // Listens for the scroll event
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                // handle show is true
                handleShow(true)

            } else handleShow(false)
        })
        return () => {
            // removes the listener
            window.removeEventListener("scroll");
        }
    }, [])
    return (
        // Keeps the Nav for the event and when the scroll event occurs the nav__black sets there
        <div className={`nav ${show && `nav__black`}`}>
            <img src="data:image/jpeg;base64,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" alt="netflix-logo" className="nav__logo" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEUNfoD///8Ae30AeHoAdXcAdnl6q6z2+/vo8vLx+Ph1sbIAdHfu9PQHfH8AgYPl8vI7kJKRvr+hx8jO4+PJ3d4eioxppqja6eni7OxdoqRSnqC42dqXxsaw09Ntra8ph4l/uLmGtrdapqeozc02lZdMmZuuzM3A2NnU4+SRvL2fy8xSmZpEkZO+1NV1qaqNxlfBAAAEIElEQVR4nO3bXXeiOhQGYNgJg6AiiIiggtbP0U7//8+beJzjoCYtSAQ7630uetVmvZuEEOnWMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvjNi3Ii8rkWtpuiLGCyKxA/dOchIZ3FPmGc5tVckGf4iPMUIA9/QGYNoEZr/c4Y+0zh2FSydX2KY00RfDDJ2ZlEnbadEa+EUYziBrlkkPzav2W4rJc5vYphzTQPTbYGixBZmkc/uYphDPTG29yObHb/p7YYSSQxzqSEGJbZs6FX9kavJQ1mMQV6/RDaVjWzaDU8i/ZDGMBf116knH1nH0FUoLrQ5qR2D3hQVhl0dwUvjihh2VHctsZVqaC3By6K1IoaZ1a2Qj5QXr68leznKpWQu6y5Tfv8wbKXC7HkV7hQjN1xh+rQKmeQkca6w0acFRaoKa9+HyosXci3Ry7Kk5w4de6lhKCps+nl4d+w+q/88VD0uHA3HpSpoLJ/ErH6FdHRkIw+b3GdOPOljK841DE2yvWaiYflXjLGWTKLtaolB9w8Me938uxq+uC8x0LMZUHRboqNh9T+QY3lb4ErXrUL92dXli6N23tPwt04xRsfV+MCi5O+Hl8Gy4W20EMMvXOrhRut1Jsrd+WQy2c82Wt9TVo7hpatY5FhlhvbXtsQsLmh/11w9x0vEAAAAAAAAAAAAAAAAgH8KMc/4l/8HRXyz3e2GLf07uqD/nO+fkLHZ2eeWgnZnkVi0ifSvJOLJpUXKTtoskfxdp9fZb7TWSETprtA50XCD3RWW/Qky19dUQCx3b7r2PV1jV+dd+sU6M88iDc0v1I2Cu5bextuzLqyrdrGgdhOHmL6xrGM/0hP3EfurIM42YY/fkMRYOpR2ZDvt3Yfe/iaLPVn4j7TBiL0l9xexooe24UbXIkvWL7n7uSGryh1JjEfjofQrQefV/7T8X2OuNFIvnq3FmisxlyR+zYoWo4Fi9oRB1kAhapbyytvT4OM9OpUpr1PUZhnR8SOYqosT4sxq99AmHvifxBuEo2G2iXiXc1bEeddYp8vtaN/55K9P9bntH0qJZV+kFHrh9HAI3P8sDodVqL7nCuzwrc0Wwr9YFEjbxGuy5+MWv1F+jcgPPr2XHtAL3l9j/v4Qny+CUguvHGfnvt7n3r44LSu+IFnVIDgarW8vUsSjmepQUnr24iB65dZZYt54NXi8vtEw9V64vDOx/fmHuPre6vSmWa6/r/s5xDls7W7D8lU64fZn6vFvUt4ZMcrfk2D69VnAmQbj95xefm3KiHMn73prN/g1CuO441zm1HacQRyHo19Btva6vMz5/JWd6jQ83z8mx48fZ8kx2fi5R9++tiKiPl1rOxEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALy43/ipMgzSotaqAAAAAElFTkSuQmCC" alt="" className="nav__avatar" />
        </div>
    )
}

export default Nav