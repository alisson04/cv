import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import PageTitle from "../PageTitle.jsx";
import PageBody from "../PageBody.jsx";

const skills = [
  {"title": "FRONTEND", "items": ['HTML', 'JavaScript', 'CSS', 'VUE.JS', 'Bootstrap', 'jQuery', 'Tailwindcss']},
  {"title": "BACKEND", "items": ['PHP', 'Laravel', 'CAKEPHP', 'Unit Testing', 'MYSQL', 'DOCKER', 'REST API', 'DocuSign']},
  {"title": "OTHER", "items": ['Scrum', 'Code Review', 'Jira', 'Bitbucket', 'Github']}
]

const Main = () => {
  return (
    <div className="header text-center bg-cv-color-3">
      <PageTitle title="Skills" />
      <PageBody content={
        <div className="flex justify-between">
          {skills.map((skillItem, typeIndex) => (
            <Card
              key={typeIndex}
              shadow={false}
              color="transparent"
              className="w-full max-w-[20rem] p-8"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 mb-8 rounded-none border-b border-cv-borders-color pb-8 text-center"
              >
                <Typography
                  variant="h1"
                  className="mt-6 flex justify-center gap-1 text-4xl font-normal text-cv-tertiary-color"
                >
                  { skillItem.title }
                </Typography>
              </CardHeader>
              <CardBody className="p-0">
                <ul className="flex flex-col gap-4">
                  {skillItem.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <span className="rounded-full border-2 border-cv-borders-color p-1">
                        <CheckIcon strokeWidth={2} className="h-3 w-3 text-cv-tertiary-color" />
                      </span>
                      <Typography className="font-normal text-cv-tertiary-color">{ item }</Typography>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          ))}
        </div>
      } />
    </div>
  )
}

export default Main