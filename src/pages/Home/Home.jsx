import NavBar from "../../components/navbar"
import Card from "../../components/productCard"

function Home() {

    const listaProdutos = [
        {
            id: 1,
            name: 'Earthen Bottle',
            href: '#',
            price: '$48',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
            id: 2,
            name: 'Nomad Tumbler',
            href: '#',
            price: '$35',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',

        },
        {
            id: 3,
            name: 'Focus Paper Refill',
            href: '#',
            price: '$89',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        }
    ]

    return (
        <div>
            <NavBar />
            <Card produtos={listaProdutos} />
            <h1>teste</h1>
        </div>
    )

}

export default Home