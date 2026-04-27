import "../styles/Menu.css";

const MENU_DATA = [
  {
    category: "Hambúrgueres Exclusivos",
    items: [
      {
        name: "The Classic OG",
        price: "R$ 32",
        desc: "Carne Angus, cheddar, picles da casa e nosso molho secreto SNACK.",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Smoky BBQ",
        price: "R$ 38",
        desc: "Hambúrguer duplo, bacon defumado, cebola crispy e molho BBQ artesanal.",
        img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Truffle Mushroom",
        price: "R$ 42",
        desc: "Queijo suíço, cogumelos salteados e maionese de trufas brancas.",
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    category: "Acompanhamentos",
    items: [
      {
        name: "Truffle Fries",
        price: "R$ 22",
        desc: "Batatas rústicas, parmesão ralado e salsa fresca.",
        img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Buffalo Wings",
        price: "R$ 28",
        desc: "Asinhas de frango picantes servidas com molho blue cheese.",
        img: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80"
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
                    <button className="add-btn">ADICIONAR AO PEDIDO</button>
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