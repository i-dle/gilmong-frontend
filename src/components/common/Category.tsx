import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/Arrow.svg";
import { CategoryLists } from "../../constance";
import SearchBar from "./SearchBar";
import { ReactComponent as FocusCheckBox } from "../../assets/FocusCheckBox.svg";
import { ReactComponent as BlurCheckBox } from "../../assets/BlurCheckBox.svg";
import { useRecoilState } from "recoil";
import { categoryListState } from "../../recoil/categoryState";
interface CategoryProps {}

const Category: React.FC<CategoryProps> = (props) => {
  const {} = props;
  const [categoryListData, setCategoryListData] =
    useRecoilState(categoryListState);
  return (
    <CategoryWrapper>
      <CategoryTopWrapper>
        <CategoryTitleDiv>
          <p>카테고리</p>
          <Arrow></Arrow>
        </CategoryTitleDiv>
        <SearchBar
          height="45px"
          width="189px"
          value=""
          placeholder="카테고리 검색"
          onChange={() => {}}
        ></SearchBar>
      </CategoryTopWrapper>
      <CategoryList>
        {CategoryLists.map(({ categoryId, title }, index) => (
          <CategoryListBox
            isClick={categoryListData[categoryId - 1]}
            onClick={() =>
              setCategoryListData(
                categoryListData.map((props, index) => {
                  if (index === categoryId - 1) {
                    return !props;
                  }
                  return props;
                })
              )
            }
          >
            {categoryListData[categoryId - 1] ? (
              <FocusCheckBox />
            ) : (
              <BlurCheckBox />
            )}
            <p>{title}</p>
          </CategoryListBox>
        ))}
      </CategoryList>
    </CategoryWrapper>
  );
};

const CategoryWrapper = styled.div`
  width: 249px;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`;

const CategoryTopWrapper = styled.div`
  height: 147px;
  width: 189px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 24px;
`;
const CategoryTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
  > p {
    color: #191919;
    font-weight: 700;
    font-size: 19px;
  }
`;

const CategoryList = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
`;

const CategoryListBox = styled.div<{ isClick: boolean }>`
  display: flex;
  margin-bottom: 10px;
  > p {
    margin-left: 10px;
    color: ${({ isClick }) => (isClick ? "#682BFB" : "#767676")};
    font-size: 16px;
    font-weight: 400;
  }
`;

export default Category;
