import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="legal pure-g">
        <div className="pure-u-1 u-sm-1-2">
          <p className="legal-license">
            This site is built with using <a href="https://github.com/Pitzcarraldo/reduxible">Reduxible</a>.
            <br />
            And site theme is based on layouts sample of <a href="http://purecss.io/layouts/side-menu/">Pure.css</a>
            <br />
            All code on this site is licensed under the
            <a href="https://raw.githubusercontent.com/Pitzcarraldo/reduxible/master/LICENSE">
              MIT License
            </a>
            unless otherwise stated.
          </p>
        </div>

        <div className="pure-u-1 u-sm-1-2">
          <a href="https://github.com/Pitzcarraldo/reduxible-example">GitHub Project</a>
          <p className="legal-copyright">
            © 2016 Minkyu Cho. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
