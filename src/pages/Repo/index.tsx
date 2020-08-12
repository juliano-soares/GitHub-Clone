import React from 'react';
import { Link } from 'react-router-dom';

import { 
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon, 
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        
        <Link className={'username'} to={'/juliano-soares'}>
          juliano-soares
        </Link>
        
        <span>/</span>

        <Link className={'reponame'} to={'/juliano-soares/Proffy'}>
          Proffy
        </Link>
      </Breadcrumb>

      <p>Aplicação criada durante a Next Level Week da Rockeseat</p>

      <Stats>
        <li>
          <StarIcon />
          <b>10</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/juliano-soares/Proffy'}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;