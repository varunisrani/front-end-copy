import { useContext, useState } from "react";
import Rec from "./Rec";
// eslint-disable-next-line no-unused-vars
import { IoChatbubbleOutline } from "react-icons/io5";
import Authapi from "../../Authapi";

export default function Chat() {
  const chatverify = useContext(Authapi);
  const [questions, setQuestions] = useState([]);
  const API_KEY = "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";

  const processQuestionToChatGPT = async (question) => {
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Enhanced Prompt for Improved Prompt Compression\n\nObjective: Elevate prompt compression for superior accuracy, aiming for a minimum accuracy of 90% in reconstructing original text from compressed prompts, while adhering to a maximum length constraint.\n\nInstructions:\n\nEnhance compression technique for 90%+ accuracy in decoding.\nPreserve essence and nuance of original text post-decoding.\nCustomize format for varying text lengths, integrating emojis judiciously.\nMaintain adherence to maximum length constraint.\nExample Format (modifiable):\nNL1000w:AI⚡️=🔄✨;4C-leads🛠️✅GenAI.💼🎓data(McK,Gart,Del,EY)+📈=💪.🚫101;🔝🔍srcs;fresh+✔️info🎯.\n\nEnhancements:\n\nFlexible format for accurate reconstruction.\nStrategic emoji integration for enhanced expressiveness.\nComprehensive dataset spanning various text types for training and evaluation.\nRefining compression techniques ensures reliable prompt compression, vital for AI applications. 🌟",
        },
        { role: "user", content: question },
      ],
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  };

  chatverify.processQuestionToChatGPT = async (question) => {
    try {
      const response = await processQuestionToChatGPT(question);
      const content = response.choices[0]?.message?.content;
      if (content) {
        setQuestions((prevQuestions) => [
          ...prevQuestions,
          { question, answer: content },
        ]);
      }
    } catch (error) {
      console.error("Error processing question:", error);
    }
  };

  chatverify.handleClearQuiz = () => {
    setQuestions([]);
  };

  return (
    <div className="flex flex-col bg-nb7 w-full  mad:flex mad:flex-col mt-10 mad1:mt-5">
      {chatverify.chat ? (
        <>
          <div className=" h-[28rem]">
            <div className="flex-1 overflow-y-auto w-full">
              <div className="flex flex-col space-y-4 w-full">
                {questions.map((q, i) => (
                  <div key={i} className="text-left">
                    <div className="bg-blue-500 text-white p-2 rounded-md">
                      <strong>Question:</strong> {q.question}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      <strong>Answer:</strong> {q.answer}
                    </div>
                  </div>
                ))}
                {chatverify.isGenerating && (
                  <div className="text-left text-gray-500">
                    Quiz Generator is working...
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <span className="text-white text-3xl text-center mt-5 mad5:text-4xl">
            Innovation Starter Pack
          </span>
          <span className="text-[1rem] text-nb3/80 text-center mt-5 mad5:text-xl">
            Kickstart your innovation process with our comprehensive selection
            of predefined prompts.
          </span>{" "}
          <div className="chatmain">
            <Rec
              title="Creative Assets"
              text1="UI wireframe"
              text2="Brochure design"
              text3="Social media"
            />
            <Rec
              title="Developer Tools"
              text1="API Integration"
              text2="Test automation"
              text3="DB optimization"
            />
            <Rec
              title="Content Creation"
              text1="Product desc"
              text2="E-mail copy"
              text3="Whitepaper"
            />
            <Rec
              title="Idea Generation"
              text1="Hashtag ideas"
              text2="Brainstorming"
              text3="Trend analysis"
            />
          </div>
        </>
      )}
    </div>
  );
}
