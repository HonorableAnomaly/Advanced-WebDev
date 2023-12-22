import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      key: "g5252ff4",
      label: "Can I haz cheezburgr?",
      content: "Yes, of course you may! Yes, of course you may! Yes, of course you may! Yes, of course you may! Yes, of course you may! Yes, of course you may!"
    },
    {
      key: "bh47uyj3h",
      label: "Can I also haz donutz",
      content:
        "After you eat your dinner! After you eat your dinner! After you eat your dinner! After you eat your dinner! After you eat your dinner! After you eat your dinner!"
    },
    {
      key: "gav234f2g",
      label: "Can I also also haz hugz?",
      content: "Why did you not say so?! Why did you not say so?! Why did you not say so?! Why did you not say so?! Why did you not say so?! Why did you not say so?!"
    }
  ];
  return <Accordion items={items} />;
}

export default App;
