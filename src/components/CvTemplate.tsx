import React from 'react';
import './CvTemplate.css';
import Header from './Header';

function CvTemplate(): JSX.Element {
  return (
    <div className="result-preview">
      {new Array(5).fill(null).map((v, i) => (
        <div className="page">
          <Header />
          {new Array(8).fill(null).map((iv, ii) => (
            <div>
              {i}-{ii}. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
              duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default CvTemplate;
