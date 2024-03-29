interface NavigationDotsProps {
  active: any;
}

const NavigationDots: React.FC<NavigationDotsProps> = ({ active }) => (
  <div className="app__navigation">
    {["home", "sobre", "serviços","projetos", "skills", "contato"].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: "#313BAC" } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
