import Emojis from "./Emojis";
import Controller from "./Controller";
import ServerRequests from "./ServerRequests";

const newServerRequests = new ServerRequests();
newServerRequests.wsMethods();
newServerRequests.sendMessages();
newServerRequests.sendFiles();

const emojis = new Emojis();
const controller = new Controller(emojis);
controller.toggleEmojiBox();