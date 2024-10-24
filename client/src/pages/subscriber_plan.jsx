export const Subscriber_Plan = () => {
    return (<>

            <h1>Subscription Plan</h1>
            <div className="plans d-flex align-items-center justify-content-center">
                    <div className="plan bg-dark d-flex align-items-center justify-content-center" style={{width:"500px",height:"250px",borderRadius:"10px"}}>
                        <h2>plan name</h2>
                        <div className="d-flex align-items-center justify-content-center" style={{display:"flex",justifyContent:"space-around"}}>
                        <h5>Price: 100</h5><pre>         </pre>
                        <h5 className="justify-content-end">1/month</h5>
                        </div>
                        <div className="d-flex align-items-center justify-content-center" style={{display:"flex",justifyContent:"space-around"}}>
                        <h5>Price: 200</h5><pre>         </pre>
                        <h5 className="justify-content-end">3/month</h5>
                        </div>
                        <div className="d-flex align-items-center justify-content-center" style={{display:"flex",justifyContent:"space-around"}}>
                        <h5>Price: 350</h5><pre>         </pre>
                        <h5 className="justify-content-end">6/month</h5>
                        </div>
                        <div className="d-flex align-items-center justify-content-center" style={{display:"flex",justifyContent:"space-around"}}>
                        <h5>Price: 600</h5><pre>            </pre>
                        <h5 className="justify-content-end">1/year</h5>
                        </div>
                        <button className="d-flex align-items-center justify-content-center" style={{backgroundColor:"green",width:"120px",height:"34px",borderRadius:"5px"}}>Subscribe</button>
                    </div>
            </div>
    </>
    );
};
