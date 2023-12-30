import "./styles/App.scss";
import users from "./data.json";
import Card from "./Components/Card/Card";

function App() {
  console.log(users);

  return (
    <div>
      <div className="app">
        {users.map((item, index) => {
          return (
            <Card
              name={item.name}
              universe={item.universe}
              alterego={item.alterego}
              occupation={item.occupation}
              superpowers={item.superpowers}
              friends={item.friends}
              info={item.info}
              url={item.url}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
