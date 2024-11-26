import Topbar from '@/components/Topbar/Topbar';
import Workspace from '@/components/Workspace/Workspace';
import { problems } from '@/utils/problems';
import { Problem } from '@/utils/types/problem';
import React from 'react';

type problemPageProps = {
    problem: Problem
};

const problemPage: React.FC<problemPageProps> = ({ problem }) => {
    console.log(problem);
    return (
        <div>
            <Topbar problemPage />
            <Workspace problem={problem}/>
        </div>
    );
}
export default problemPage;


//fetch the local data from utils/problems  (by SSG - Statc Site Generation  --------> WHICH IS SUPER FAST TO RENDER PAGE)


//SSG (STATIC SITE GENERATION)

//IT HAS TWO FUNCTION

//1. getStaticPaths => it create the dynamic routes that should be pre-generated on the server

export async function getStaticPaths() {
    const paths = Object.keys(problems).map((key) => ({
        params: { pid: key },
    }));

    return {
        paths,
        fallback: false,
    };
}

//2. getStaticProps => it fetches the data

export async function getStaticProps({ params }: { params: { pid: string } }) {
    const { pid } = params;
    const problem = problems[pid];

    if (!problem) {
        return {
            notFound: true,
        };
    }
     problem.handlerFunction=problem.handlerFunction.toString();
    return {
        props: {
            problem,
        },
    };
}
