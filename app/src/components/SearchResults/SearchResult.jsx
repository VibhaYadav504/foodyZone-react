import styled from "styled-components";

const SearchResult = ({ data: foods }) => {
  return (
    <FoodCardContainer>
      <FoodCards>
        {data?.map((food) => (
          <FoodCard key={food.name}>{food.text}</FoodCard>
        ))}
      </FoodCards>
    </FoodCardContainer>
  );
};

export default SearchResult;

const FoodCardContainer = styled.section`
  height: calc(100vh - 210px);
  background-image: url("/bg.png");
  background-size: cover;
`;

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 16px;
`;

const FoodCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid #fff;
  color: white;
  padding: 16px;
  margin: 8px;
  border-radius: 8px;
  flex: 1 1 200px;
`;
