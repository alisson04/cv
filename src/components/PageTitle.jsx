import PropTypes from 'prop-types';

const PageTitle = ({ title }) => {
  return (
    <div className="h-screen-10 flex p-3 text-cv-color-1">
      <h1 className="self-center w-full text-5xl border-b border-cv-borders-color">{ title }</h1>
    </div>
  )
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle