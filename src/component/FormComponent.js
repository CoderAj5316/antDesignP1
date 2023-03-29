import React from 'react'
import "./FormComponent.css"
import { Input, Dropdown, Checkbox, Radio, Button, Card } from 'antd'


const { Search } = Input;



const FormComponent = () => {


    return (
        <>
            <div className='mainDiv1'>
                {/* for form */}


                <form action="">
                <div className="leftPart">
                    <div className='row1'>

                        <div >
                            <label style={{ float: 'left' }}>First name</label>
                            <Input className='inputField' placeholder="Basic usage" required/>
                        </div>

                        <div style={{ marginLeft: '5.8%' }}>
                            <label style={{ float: 'left' }}>Last name</label>
                            <Input className='inputField' placeholder="Basic usage" required/>
                        </div>


                    </div>


                    {/* For UserName :  */}
                    <div className="userNameDiv">
                        <label style={{ float: 'left' }}>Username</label>

                        <div className='forUserName'>
                            <a className='spanUserName'>@</a>
                            <Input id='inputUN' className='inputField' placeholder="UserName" required/>
                        </div>
                    </div>

                    {/* For Email :  */}

                    <div className="emailDiv">
                        <label style={{ float: 'left' }}>Email <a className='optionalText' href="">(Optional)</a></label>
                        <br />
                        <div className='forUserName'>
                            <Input id='inputField' className='inputField' placeholder="Basic usage" required/>
                        </div>

                    </div>

                    {/* For Address1 :  */}

                    <div className="addressDiv">


                        <div><label style={{ float: 'left' }}>Address</label></div>

                        <div style={{ width: '90%' }}>
                            <Input className='inputField' placeholder="Basic usage" required/>
                        </div>
                    </div>


                    {/* For Address2 :  */}

                    <div className="addressDiv">
                        <label style={{ float: 'left' }}>Address<a className='optionalText' href="">(Optional)</a></label>
                        <br />
                        <div className='forUserName'>
                            <Input className='inputField' placeholder="Basic usage" required/>
                        </div>
                    </div>


                    {/* Country state zip */}
                    <div className='row6'>

                        {/* For Country DropDown */}

                        <div className='divForCountry'>
                            <label style={{ float: 'left' }}>Country</label>
                            <select required>
                                <option value="">Choose...</option>
                                <option value="">UnitedState</option>
                                <option value="">India</option>

                            </select>
                        </div>

                        <div className='divForState'>
                            <label className='similarGap' style={{ float: 'left' }}>State</label>
                            <select required>
                                <option className='txt' value="">Choose...</option>
                                <option value="">California</option>
                                <option value="">Sydney</option>

                            </select>
                        </div>

                        <div className='divForZip'>
                            <label style={{ float: 'left' }}>Zip</label>
                            <Input  required></Input>
                        </div>

                        
                        

                    </div>
                    <hr className='hrLine'/>




                    {/* For CheckBox */}

                    <div className="mainCheckBox">
                        <div className="forCheckBox">
                            <Checkbox></Checkbox>
                            <label>Shipping address is the same as my billing address</label>
                        </div>

                        <div className="forCheckBox">
                            <Checkbox ></Checkbox>
                            <label> Save this information for next time</label>
                        </div>
                    </div>
                    <hr className='hrLine'/>



                    {/* For Payments */}

                    <div className="paymentDiv">
                        <h3 className='paymentHeading'>Payment</h3>

                        <div className='paymentList'>
                            <Radio></Radio>
                            <label> Credit card</label>
                        </div>

                        <div className='paymentList'>
                            <Radio></Radio>
                            <label> Debit card</label>
                        </div>

                        <div className='paymentList'>
                            <Radio></Radio>
                            <label> Paypal</label>
                        </div>

                    </div>

                    <div className='row1'>

                        <div >
                            <div> <label style={{ float: 'left' }}>Name on card</label></div>

                            <div> <Input className='inputField' placeholder="Basic usage" required/></div>
                        </div>

                        <div style={{ marginLeft: '5.8%' }}>
                            <label style={{ float: 'left' }}>Credit card number</label>
                            <Input className='inputField' placeholder="Basic usage" required/>
                        </div>


                    </div>
                    <h6 className='paymentNameDemo'>Full name as displayed on card</h6>

                    <div className='rowExpiry'>

                        <div >
                            <label style={{ float: 'left' }}>Expiration</label>
                            <Input className='inputField' placeholder="Basic usage" required/>
                        </div>

                        <div className='cvvDiv'>
                            <label style={{ float: 'left' }}>CVV</label>
                            <Input className='inputField' placeholder="Basic usage" required/>
                        </div>
                    </div>

                    <hr className='hrLine'/>

                    <button type='submit' className='btn'>Continue to checkout</button>


                </div>

                </form>
                
                <div className="rightPart">
                    <div className="rightPartRow1">
                        <h2 style={{ float: 'left' }}>Your cart</h2>
                        <Button className='blueBtn' type="primary" shape="circle" size='small' icon={3} />
                    </div>

                    <hr />

                    <div>
                        <div className="cardList">
                            <div>
                                <h6>Product name</h6>
                                <span>Brief description</span>

                            </div>
                            <span style={{ marginLeft: '8vw' }}>$12</span>
                        </div>
                        <hr />

                        <div className="cardList">
                            <div>
                                <h6>Product name</h6>
                                <span>Brief description</span>
                            </div>
                            <span style={{ marginLeft: '8vw' }}>$12</span>

                        </div>
                        <hr />
                        <div className="cardList">
                            <div>
                                <h6>Product name</h6>
                                <span>Brief description</span>
                            </div>
                            <span style={{ marginLeft: '8vw' }}>$12</span>
                        </div>

                        <hr className='hrLine' />

                        <div className="cardList2">
                            <div>
                                <h6>Promo Code</h6>
                                <span>Discount</span>
                            </div>
                            <span className='dollarPrice'>-$</span>
                        </div>

                    </div>



                </div>


            </div>




        </>
    )
}

export default FormComponent
