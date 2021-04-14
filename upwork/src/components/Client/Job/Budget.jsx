import { faClock, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Btn from "../../UI/Form/Btn/Btn";
import Input from "../../UI/Form/Input/Input";
import RadioBox from "../../UI/Form/RadioBox/RadioBox";

const Budget = (props) => {
  return (
    <div className="col-span-4">
      <div className="bg-white mb-5">
        <ul className="list-group">
          <li className="item-border ">
            <p className="text-2xl font-extrabold">Budget </p>
            <span>step 5 of 6</span>
          </li>
          <li className="item-border">
            <p className="font-bold text-sm mb-5">
              How would you like to pay your freelancer or agency?{" "}
            </p>
            <div className="grid sm:grid-cols-2 	auto-rows-fr		 gap-2">
              <RadioBox
                svg={<FontAwesomeIcon icon={faClock} />}
                id="payByHour"
                title="Pay By the hour"
                text="Pay hourly to easily scale up and down."
              ></RadioBox>
              <RadioBox
                id="payFixedPrice"
                svg={<FontAwesomeIcon icon={faDollarSign} />}
                title="Pay a Fixed Price"
                text="Define payment before work begins and pay only when work is delivered."
              ></RadioBox>
            </div>
          </li>
          <li className="item-border">
            <div>
              <p className="font-bold text-sm mb-2">Enter your hourly range</p>
              <Input
                className="pl-10 appearance-none	"
                svg={
                  <svg
                    width="20"
                    height="20"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="dollar-sign"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 288 512"
                  >
                    <path
                      fill="currentColor"
                      d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"
                    ></path>
                  </svg>
                }
                type="number"
                name="hourlyRange"
                placeholder="0"
                errorMsg=""
              />
            </div>
            <div>
              <p className="font-bold text-sm mb-2">Enter your fixed price</p>
              <Input
                className="pl-10"
                svg={
                  <svg
                    width="20"
                    height="20"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="dollar-sign"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 288 512"
                  >
                    <path
                      fill="currentColor"
                      d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"
                    ></path>
                  </svg>
                }
                type="number"
                name="fixedPrice"
                placeholder="0"
                errorMsg=""
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Budget;
