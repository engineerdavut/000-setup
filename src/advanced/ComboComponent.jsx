import React from 'react'
export default class ComboComponent extends React.Component {
    constructor(props) {
        super(props)
        this.productChanged=this.productChanged.bind(this)
        this.products=[
            {"id" : 201,"name" : "cep telefonu","price" : 345},
            {"id" : 202,"name" : "bilgisayar", "price" : 6000},
            {"id" : 203,"name" : "tablet","price" : 895}
        ]
        const currentProductId=203
        this.state={
            currentProductId: currentProductId,
            currentProduct : this.products.find(p=>p.id===currentProductId)
        }
    }
    productChanged(event){
        const currentProductId=Number(event.target.value)
        this.setState({currentProductId : currentProductId,
            currentProduct : this.products.find(p=>p.id===currentProductId)})
            //alert(`secilen : ${currentProductId}`)
    }
    render() {
        return(
            <>
                <h1>Seçim Yap</h1>
                Seçilen : {this.state.currentProductId} {this.state.currentProduct.name}
                <select value={this.state.currentProductId} onChange={this.productChanged}>
                    <option key={0} value={0}>Seçiniz</option>
                    {
                        this.products.map((product) =>
                        <option key={product.id} value={product.id}>{product.name}</option>
                        )
                    }<br/>

                </select>
            </>
        )
    }

}
