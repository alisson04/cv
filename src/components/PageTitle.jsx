import PropTypes from 'prop-types';

const PageTitle = ({ title }) => {
  return (
    <div className="h-screen-10 flex p-3 text-cv-tertiary-color">
      <h1 className="self-center w-full text-5xl border-b border-gray-700">{ title }</h1>
    </div>
  )
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle