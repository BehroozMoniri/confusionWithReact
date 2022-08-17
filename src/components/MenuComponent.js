import React  from "react";
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// import { Navbar, NavbarBrand } from 'reactstrap';
// import Menu from './MenuComponent_';
// import DishDetail from './DishdetailComponent';
// import { DISHES } from '../shared/dishes';


// class Menu extends Component {
    
    // constructor(props) {
    // super(props);
    // this.state = {
    //     dishes: DISHES,
    //     selectedDish: null
    // };
    // }

    // onDishSelect(dishId) {
    // this.setState({ selectedDish: dishId});
    // }

    // render(){
    //     console.log('renders menu component');
function RenderMenuItem ({dish}) {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
};

function Menu(props) {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} OnClick={props.onClick} />
            </div>
        );
    });

    // const menu = this.props.dishes.map((dish) => {
    //     return (
    //         <div key={ dish.id } className="col-12 col-md-5 m-1">    
    //             <Card onClick={ () => this.props.onClick( dish.id ) } >
    //                 <CardImg width="100%" src={ dish.image } alt={ dish.name } />
    //                 <CardImgOverlay>
    //                     <CardTitle> { dish.name }</CardTitle>
    //                 </CardImgOverlay>
    //             </Card>                
    //         </div>
    //     );
    // }
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
    
}

//     componentDidMount(){
//         console.log('Menu component componentDidMounbt is invoked');
//     }
// }

export default Menu;
 