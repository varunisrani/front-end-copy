import { useContext } from "react";
import { CiMicrophoneOn } from "react-icons/ci";
import { FaFileMedical } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import Authapi from "../../Authapi";

export default function Input() {
  // State to control chat visibility
  const chatverify = useContext(Authapi);

  // Function to handle sending message

  chatverify.handleGenerateQuiz = async () => {
    chatverify.setIsGenerating(true);

    try {
      const response = await chatverify.processQuestionToChatGPT(
        chatverify.userInput
      );
      const content = response.choices[0]?.message?.content;
      if (content) {
        chatverify.setQuestions([
          ...chatverify.questions,
          { question: chatverify.userInput, answer: content },
        ]);
      }
    } catch (error) {
      console.error("Error processing question:", error);
    } finally {
      chatverify.setIsGenerating(false);
      chatverify.setUserInput("");
    }
  };

  // Function to handle hover over input box
  const handleInputHover = () => {
    chatverify.setChat(true); // Set chat state to true when input box is hovered over
  };

  return (
    <div className="chatinputmain">
      <CiMicrophoneOn
        className="text-nb3 ml-2 mt-6 mad5:mt-[1.8rem] mad6:mt-5"
        size={20}
      />
      <input
        type="text"
        className="chatinput"
        placeholder="You can ask me anything! I am here to help."
        value={chatverify.inputValue}
        onChange={(e) => chatverify.setInputValue(e.target.value)}
        onMouseEnter={handleInputHover} // Call handleInputHover function when input box is hovered over
      />
      <FaFileMedical
        className="text-nb3 ml-[31rem] mt-5 mad2:ml-[25rem] mad5:ml-[35rem] mad5:mt-[1.8rem] mad6:ml-[5rem]"
        size={20}
      />
      <LuSend
        className="text-nb3 ml-8 mt-5 mad1:mr-3 mad2:mr-3 mad5:mt-[1.8rem] mr-5"
        size={20}
        onClick={chatverify.handleGenerateQuiz}
      />
    </div>
  );
}
