import Accordion from './components/Accordion';
function App() {


  const items=[
    {
      id:'asdasd',
      label:'Can I use React on a project?',
      content:'You can use React on any project you want!!'
    },
    {
      id:'ghfgh',
      label:'Can I use Java on a project?',
      content:'You can use React on any project you want!!'
    },
    {
      id:'vcvcv',
      label:'Can I use CSS on a project?',
      content:'You can use React on any project you want!!'
    },
  ];
  return (
    <div>
    <Accordion items={items}/>
    </div>
 );
}

export default App;
