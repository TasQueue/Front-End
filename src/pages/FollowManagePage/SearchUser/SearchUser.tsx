import { useState } from 'react';
import * as S from './SearchUser.styled';

// 사용자 정보 타입 정의
interface UserInfo {
  name: string;
  cat: string;
}

// 목업 사용자 데이터
const mockUsers: UserInfo[] = [
  { name: '홍길동', cat: 'one' },
  { name: '이순신', cat: 'two' },
  { name: '김유신', cat: 'three' },
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

const SearchUser = () => {
  const [searchTerm, setSearchTerm] = useState(''); // 입력하는 검색어 저장 상태
  const [foundUsers, setFoundUsers] = useState<UserInfo[]>([]); // 검색된 사용자 정보 저장 상태

  const userSearch = () => {
    const filteredUsers = mockUsers.filter((user) => user.name.includes(searchTerm));
    if (filteredUsers.length > 0) {
      setFoundUsers(filteredUsers);
    } else {
      alert('사용자를 찾을 수 없습니다.');
      setFoundUsers([]);
    }
  };

  return (
    <div>
      <S.Label>사용자 찾기.</S.Label>
      <S.SearchWrap>
        <S.SearchInput
          type='text'
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder='사용자 이름을 검색하세요.'
        />
        <S.SearchBtn onClick={userSearch}>
          <S.BtnIcon src='/assets/icons/Search.svg' alt='Search' />
        </S.SearchBtn>
      </S.SearchWrap>
      {foundUsers.map((user) => (
        <div key={user.name}>
          <p>{user.name}</p>
          <img src={getImagePath(user.cat)} alt={`${user.name}의 이미지`} />
        </div>
      ))}
    </div>
  );
};

export default SearchUser;
