import "../styles/Menu.css";
import img1 from "../assets/img/image-12.webp";

const MENU_DATA = [
  {
    category: "Novidades",
    items: [
      {
        name: "Milano Burger",
        price: "R$ 30,00",
        desc: "2 hambúrguer, 2 fatias de queijo provolone, Cebola roxa, Alface e tomate",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1772071454197blob_600.webp",
        link: "https://pedido.anota.ai/product/697276ac0a40b3ff822188b4/0/snack-burguer-."
      },
      {
        name: "oklahoma",
        price: "R$ 32,00",
        desc: "Pão brioche, alface, tomate, 1 hambúrguer 130g, 2 fatias de queijo provolone, cebola caramelizada, bacon, maionese caseira.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1769136530318blob_600.webp",
        link: "https://pedido.anota.ai/product/69727b4b1309f567f2df0143/0/snack-burguer-."
      },
      {
        name: "Insane burguer",
        price: "R$ 28,00",
        desc: "Pão brioche, alface, tomate, 1 hambúrguer 130g, 2 fatias de queijo provolone, bacon caramelizado, maionese caseira.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1769135657501blob_600.webp",
        link: "https://pedido.anota.ai/product/69727824a96eeb581ff9d569/0/snack-burguer-."
      },
      {
        name: "Porção de Fritas com Costela desfiada e Creme de queijo",
        price: "R$ 38,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1763940849657blob_600.webp",
        link: "https://pedido.anota.ai/product/692399f39f20b53d92d4413d/0/snack-burguer-."
      }
    ]
  },
  {
    category: "Promoção",
    items: [
      {
        name: "2 BATIDAS DE AÇAÍ PROMOCIONAIS",
        price: "R$ 20,00",
        desc: "Cabores Disponíveis: Chocolate - Paçoca - Dorella - Amendoims - Creme Ninho - Brigadeiro de Maracuja",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1775686419883blob_600.webp",
        link: "https://pedido.anota.ai/product/69d6d3158edce5734ad57cee/0/snack-burguer-."
      }
    ]
  },
    {
    category: "Porções",
    items: [
      {
        name: "Batata, Mussarela E Bacon",
        price: "R$ 38,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812732456blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b5118b/0/snack-burguer-."
      },
      {
        name: "Meia porção de Batata, mussarela e bacon",
        price: "R$ 19,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747852024754blob_600.webp",
        link: "https://pedido.anota.ai/product/682e1afaccb056af7946da98/0/snack-burguer-."
      },
      {
        name: "Batata, Calabresa e cheddar",
        price: "R$ 43,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1771885942158blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b5118c/0/snack-burguer-."
      },
      {
        name: "Meia porção de batata, calabresa e cheddar",
        price: "R$ 21,50",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1771885942158blob_600.webp",
        link: "https://pedido.anota.ai/product/682e1a584beeac365b101f81/0/snack-burguer-."
      },
      {
        name: "Batata, Calabresa, bacon e cheddar",
        price: "R$ 50,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1769664923482blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b5118e/0/snack-burguer-."
      },
      {
        name: "Meia porção de batata, calabresa, cheddar e bacon",
        price: "R$ 25,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747852150725blob_600.webp",
        link: "https://pedido.anota.ai/product/682e1b78d18cee3d39193009/0/snack-burguer-."
      },
      {
        name: "Picanha assada na brasa",
        price: "R$ 80,00",
        desc: "Acompanha mandioca cozida.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747852584627blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51194/0/snack-burguer-."
      },
      {
        name: "Meia porção de picanha na brasa",
        price: "R$ 40,00",
        desc: "Acompanha mandioca cozida.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747852584627blob_600.webp",
        link: "https://pedido.anota.ai/product/682e1d2a2ea686f9169a6cfc/0/snack-burguer-."
      },
      {
        name: "Coxinha empanada",
        price: "R$ 55,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812980060blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b5118f/0/snack-burguer-."
      },
      {
        name: "Meia porção de coxinha empanada",
        price: "R$ 27,50",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747852243102blob_600.webp",
        link: "https://pedido.anota.ai/product/682e1bd43391633547b6416a/0/snack-burguer-."
      },
      {
        name: "Filé de peito empanado",
        price: "R$ 50,00",
        desc: null,
        img: img1,
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51190/0/snack-burguer-."
      },
      {
        name: "Meia porção de filé de peito empanado",
        price: "R$ 25,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747852741952blob_600.webp",
        link: "https://pedido.anota.ai/product/682e1c7accb056af7947091b/0/snack-burguer-."
      },
      {
        name: "Calabresa acebolada",
        price: "R$ 43,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747813013259blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b5118d/0/snack-burguer-."
      },
      {
        name: "Meia porção de calabresa acebolada",
        price: "R$ 21,50",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747852501215blob_600.webp",
        link: "https://pedido.anota.ai/product/682e1cd64beeac365b10c55c/0/snack-burguer-."
      },
      {
        name: "Batata frita G",
        price: "R$ 30,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812936520blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51193/0/snack-burguer-."
      },
      {
        name: "Batata frita M",
        price: "R$ 27,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812936520blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51192/0/snack-burguer-."
      },
      {
        name: "Batata frita P",
        price: "R$ 21,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812936520blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51191/0/snack-burguer-."
      }
    ]
  }
];

export default function Menu() {
  return (
    <section className="menu-page">
      <header className="menu-header">
        <span className="tag">NOSSA ARTE</span>
        <h1>O Manifesto do Sabor</h1>
        <p>Cada ingrediente é selecionado localmente, cada hambúrguer é moldado à mão.</p>
      </header>

      <div className="menu-container">
        {MENU_DATA.map((section, idx) => (
          <div key={idx} className="menu-section">
            <h2 className="section-title">{section.category}</h2>
            <div className="menu-grid">
              {section.items.map((item, i) => (
                <div key={i} className="menu-item">
                  <div 
                    className="item-image" 
                    style={{ backgroundImage: `url(${item.img})` }}
                  />
                  <div className="item-info">
                    <div className="item-header">
                      <h3>{item.name}</h3>
                      <span className="price">{item.price}</span>
                    </div>
                    <p>{item.desc}</p>
                    <a href={item.link} target="_blank" rel="noreferrer" className="add-btn">
                      ADICIONAR AO PEDIDO
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}