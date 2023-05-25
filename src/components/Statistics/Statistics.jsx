import './Statistics.styled.js';
import PropTypes from 'prop-types';
import { StatisticsBox, StatList, StatItem } from './Statistics.styled';

const Statistics = ({ stats, title }) => {
  return (
    <StatisticsBox>
      {title && <h2 className="title">{title}</h2>}
      <StatList>
        {stats.map(el => (
          <StatItem
            key={el.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className="label">{el.label}</span>
            <span className="percentage"> {el.percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </StatisticsBox>
  );
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Statistics;
