interface NavItem {
  label: string;
  value: string;
  icon: React.ReactNode;
}

type Props = {
  items: NavItem[];
};

const SearchTopLink = (props: Props) => {
  return (
    <div className="flex items-center gap-4">
      {props.items.map((item) => (
        <div
          key={item.value}
          className="flex items-center gap-1 cursor-pointer hover:text-white border-b-2 border-transparent hover:border-white/80 pb-1"
        >
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default SearchTopLink;
