import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import UserProfileCard from "../../components/Cards/UserProfileCard";
import Button from "react-bootstrap/Button";

const userProfileData = {
  bgSrc: "/images/logo.png",
  ProfileSrc: "/images/logo.png",
  name: "John Doe",
  username: "@johndoe",
  aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  fb: "https://www.facebook.com/johndoe",
  twitter: "https://twitter.com/johndoe",
  insta: "https://www.instagram.com/johndoe",
};
export default function profile() {
  return (
    <section className="p-5 bg-[#f7f7f8] ">
      <div className="flex gap-5">
        <div className="bg-white w-4/6 py-5 px-5 rounded-lg">
          <div>
            <p>Create Profile</p>
          </div>

          <div className="flex w-full justify-between gap-3">
            <div className="w-full">
              <label htmlFor="">Username</label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <div className="w-full">
              <label htmlFor="">Email</label>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">
                  @example.com
                </InputGroup.Text>
              </InputGroup>
            </div>
          </div>
          <div className="flex w-full justify-between gap-3">
            <div className="w-full">
              <label htmlFor="">First Name</label>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <div className="w-full">
              <label htmlFor="">last Name</label>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
            </div>
          </div>

          <div className="w-full">
            <label htmlFor="">Address</label>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
          </div>

          <div className="flex w-full justify-between gap-3">
            <div className="w-full">
              <label htmlFor="">City</label>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="City"
                  aria-label="City"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <div className="w-full">
              <label htmlFor="">Country</label>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Country"
                  aria-label="Country"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
            </div>
            <div className="w-full">
              <label htmlFor="">Postal Code</label>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Postal"
                  aria-label="Postal"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
            </div>
          </div>
          <div>
            <InputGroup>
              <InputGroup.Text>About Me</InputGroup.Text>
              <Form.Control rows={4} as="textarea" aria-label="With textarea" />
            </InputGroup>
          </div>
          <div className="flex justify-end mt-5">
            <Button variant="primary" size="lg">
              Update
            </Button>
          </div>
        </div>
        <div className="bg-white w-2/6">
          <UserProfileCard
            bgSrc={userProfileData.bgSrc}
            ProfileSrc={userProfileData.ProfileSrc}
            name={userProfileData.name}
            username={userProfileData.username}
            aboutme={userProfileData.aboutme}
            fb={userProfileData.fb}
            twitter={userProfileData.twitter}
            insta={userProfileData.insta}
          />
        </div>
      </div>
    </section>
  );
}
