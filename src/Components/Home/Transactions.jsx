import styled from "styled-components";
export default function Transactions({ item }) {
  return (
    <Li>
      <div>
        <span className="date">{item.date}</span>
        <span className="description">{item.description}</span>
      </div>
      <span className={`${item.type}`}>{item.value}</span>
    </Li>
  );
}

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 16px;
  line-height: 19px;
  padding-bottom: 15px;
  .date {
    color: #c6c6c6;
  }
  .description {
    color: #000;
    padding-left: 8px;
  }
  .true {
    color: #26ac00;
    align-self: flex-end;
  }
  .false {
    color: #c70000;
  }
`;
