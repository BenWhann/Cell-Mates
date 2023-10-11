import '../styles/Commissary.css'

export default function CommisaryPage() {

    return (
        <div className='container'>
            <div className='d-flex flex-column align-items-center m-3'>
            <h1 id='commissaryHeader'>Commissary Shop</h1>
            <div>Buy your locked up lover some goodies!</div>
            </div>
            <div id='commissaryItems' className='row justify-content-center'>

                <div className="card m-3 col-3">
                    <img src="https://th.bing.com/th/id/OIP.xmY4oXmh3o67aQXNpaq5MAHaHa?pid=ImgDet&rs=1" class="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Ramen Noodles</h5>
                        <p className="card-text">$1.49</p>
                        <a href="#" class="btn btn-primary">Buy</a>
                    </div>
                </div>

                
                <div className="card m-3 col-3">
                    <img src="https://www.mdsassociates.com/content/images/oral_health/40-ORA90010.PNG" class="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Toothbrush</h5>
                        <p className="card-text">$1.00</p>
                        <a href="#" class="btn btn-primary">Buy</a>
                    </div>
                </div>

                
                <div className="card m-3 col-3">
                    <img src="https://www.unoclean.com/Janitorial-Supplies/Skin-Care-Supplies/Dial-Professional/Gold-Deodorant-Bar-Soap.jpg" class="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Soap</h5>
                        <p className="card-text">$2.00</p>
                        <a href="#" class="btn btn-primary">Buy</a>
                    </div>
                </div>

                
                <div className="card m-3 col-3">
                    <img src="https://th.bing.com/th/id/R.6c208e15767663ca0f2787c1e99da4f3?rik=QK3LvoLkRdTwpg&pid=ImgRaw&r=0" class="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Potato Chips</h5>
                        <p className="card-text">$1.00</p>
                        <a href="#" class="btn btn-primary">Buy</a>
                    </div>
                </div>

            </div>
        </div>
    );

} 
