import * as R from './RequestFollow.styled';

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

const RequestFollow = () => {
  return (
    <R.Conatiner>
      <R.Header>
        <R.Title>Request</R.Title>
      </R.Header>
      <R.Elements>
        {mockUsers.map((user) => {
          return (
            <R.Element key={user.name}>
              <R.UsersCat src={getImagePath(user.cat)} alt={`${user.name}의 이미지`} />
              <R.Wrapper>
                <R.UsersName>{user.name}</R.UsersName>
                <R.ButtonWrapper>
                  <R.Button color='skyblue'>수락</R.Button>
                  <R.Button color='silver'>삭제</R.Button>
                </R.ButtonWrapper>
              </R.Wrapper>
            </R.Element>
          );
        })}
      </R.Elements>
    </R.Conatiner>
  );
};

export default RequestFollow;
