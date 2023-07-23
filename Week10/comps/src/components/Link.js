import useNavigation from "../hooks/use-navigation";
import classnames from 'tailwindcss-classnames';
function Link({ to, children ,className,activeClassName}) {
  const { navigate,currentPath } = useNavigation();


  const classes = classnames('text-blue-500',
  className,
  currentPath === to && activeClassName
  );
  const handleClick = (event) => {
    if(event.metaKey || event.ctrlKey)
    {
        return;
    }
    event.preventDefault();

    navigate(to);
  };

  return <a className={classes} href={to} onClick={handleClick}>{children}</a>;
}

export default Link;
