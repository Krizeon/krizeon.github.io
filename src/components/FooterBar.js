import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';


const FooterBar = () => {
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          color="inherit"
          href="https://github.com/Krizeon"
        >
          Github
        </Link>
        <Link
          color="inherit"
          href="https://www.linkedin.com/in/kevin-hernandez-3816331a7/"
        >
          LinkedIn
        </Link>
        <Link
          color="inherit"
          href="/add-link-here/"
        >
          Instagram
        </Link>
      </Breadcrumbs>
    </div>
  );
}

export default FooterBar
