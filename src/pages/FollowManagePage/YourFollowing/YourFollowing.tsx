import * as Y from './YourFollowing.styled';

// 사용자 정보 타입 정의
interface UserInfo {
  name: string;
  cat: string;
}

// 목업 사용자 데이터
const mockUsers: UserInfo[] = [
  { name: 'Joao Cancelo', cat: 'one' },
  { name: 'Van De Ven', cat: 'two' },
  { name: 'kevin De Bruyne', cat: 'three' },
  { name: 'Enzo Fernanadez', cat: 'two' },
  { name: 'Ruben Dias', cat: 'one' },
  { name: 'Grimaldo', cat: 'three' },
  { name: 'Ferran Torres', cat: 'four' },
  { name: 'Federico Chiesa', cat: 'four' },
  { name: 'Federico Valverde', cat: 'four' },
  { name: 'Joao Felix', cat: 'one' },
];

const getImagePath = (cat: string) => {
  switch (cat) {
    case 'one':
      return '/assets/images/Cat/badCat.svg';
    case 'two':
      return '/assets/images/Cat/normalCat.svg';
    case 'three':
      return '/assets/images/Cat/goodCat.svg';
    case 'four':
      return '/assets/images/Cat/perfectCat.svg';
    default:
      return '/assets/images/Cat/normalCat.svg';
  }
};

const YourFollowing = () => {
  return (
    <Y.Conatiner>
      <Y.Header>
        <Y.Title>Following</Y.Title>
      </Y.Header>
      <Y.Elements>
        {mockUsers.map((user) => {
          return (
            <Y.Element key={user.name}>
              <Y.UsersCat src={getImagePath(user.cat)} alt={`${user.name}의 이미지`} />
              <Y.Wrapper>
                <Y.UsersName>{user.name}</Y.UsersName>
                <Y.Button>삭제</Y.Button>
              </Y.Wrapper>
            </Y.Element>
          );
        })}
      </Y.Elements>
    </Y.Conatiner>
  );
};

export default YourFollowing;
