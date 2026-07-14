import { ClipboardEvent, MouseEvent, SubmitEvent } from "react";
import { Button } from "./components/button/Button";
import { Input } from "./components/input/Input";
import { Form } from "./components/form/Form";
import { ThemeProvider } from "./utils/ThemeContext";

const App = () => {

  const buttonOnClick = (event: 
      MouseEvent<HTMLButtonElement>) => {
          console.log('button pressed');
          return   
  }

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
      console.log("testing");
      
  };

  const submitForm = (event: SubmitEvent<HTMLFormElement>) => {
      console.log("testing");
      
  };

  return(
    <ThemeProvider>
      <h1>Design System</h1>
      <Form
          handleSubmit={submitForm}
          width="350px"
          gap="15px"
          requirments="This is the set of requirements for the form. This is the set of requirements for the form."
      >
        <Input
            type="text"
            name="first_name"
            label="Name"
            state="default"
            placeholder="Type first name..."
            spellCheck={true}
            inputMode="numeric"
            errorMessage="This is an error."
        ></Input>
        <Input
            type="text"
            name="last_name"
            label="Last name"
            state="default"
            placeholder="Type first name..."
            spellCheck={true}
            inputMode="numeric"
            errorMessage="This is an error."
        ></Input>
        <Button
            label="Send"
            state="default"
            errorLabel="Server error"
            successLabel="Saved"
            eventHandler={buttonOnClick}>
        </Button>
      </Form>
    </ThemeProvider>

    
  );
};

export default App;