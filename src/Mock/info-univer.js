import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faUniversity } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import Servic1 from "../Assets/Img/our-services/pic1.jpg";
import Servic2 from "../Assets/Img/our-services/pic2.jpg";
import Servic3 from "../Assets/Img/our-services/pic3.jpg";

export const planCardData = [
  {
    img: Servic1,
    imgTitle: "Еженедельные тесты",
    icons: (
      <FontAwesomeIcon
        icon={faUniversity}
        size={`1.5rem`}
        className="card-icon"
      />
    ),
    cardText: "текущий экзамен",
    cardTitle:
      "Вы можете участвовать в конкурсах, проводимых каждый семестр в университете",
  },
  {
    img: Servic2,
    imgTitle: "Лекции",
    icons: (
      <FontAwesomeIcon icon={faBook} size={`1.5rem`} className="card-icon" />
    ),
    cardText: "Лекции",
    cardTitle:
      "Вы можете получить лекции онлайн по нужной вам теме",
  },
  {
    img: Servic3,
    imgTitle: "Ежедневные презентации",
    icons: (
      <FontAwesomeIcon icon={faFile} size={`1.5rem`} className="card-icon" />
    ),
    cardText: "Ресурсы для самостоятельного изучения",
    cardTitle:
      "В этом разделе вы можете найти необходимые вам электронные ресурсы.",
  },
];
