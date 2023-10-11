export default function Nav({ links }) {

    return(
          <div>
           <div>
            <h1>LOGO IMAGE</h1>
           </div>
          <div>
          <div>
            Login In
          </div>
        {/* AUTH LOGIC*/}
          <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </div>
    )
    
}