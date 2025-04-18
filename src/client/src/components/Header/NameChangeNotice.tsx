import { Notice } from "@codegouvfr/react-dsfr/Notice";
import { useState } from "react";

const LOCAL_STORAGE_SHOULD_HIDE_NAME_CHANGE_KEY =
  "LOCAL_STORAGE_SHOULD_HIDE_NAME_CHANGE";

function NoticeTitle() {
  return (
    <span>
      <span className="fr-mr-1w">AgentConnect devient ProConnect !</span>
    </span>
  );
}

function NameChangeNotice() {
  const shouldHideNameChange = !!localStorage.getItem(
    LOCAL_STORAGE_SHOULD_HIDE_NAME_CHANGE_KEY
  );
  const [isClosed, setIsClosed] = useState(shouldHideNameChange);
  return (
    <Notice
      isClosable
      isClosed={isClosed}
      onClose={onClose}
      title={<NoticeTitle />}
    />
  );

  function onClose() {
    setIsClosed(true);
    localStorage.setItem(LOCAL_STORAGE_SHOULD_HIDE_NAME_CHANGE_KEY, "1");
  }
}

export default NameChangeNotice;
