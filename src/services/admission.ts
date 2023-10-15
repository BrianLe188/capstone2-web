/* eslint-disable @typescript-eslint/no-explicit-any */
import { request } from "./request";

const applyApplicationAdmissionRegistration = (req: { body: any }) =>
  new Promise((rs, rj) => {
    request()
      .post("/admission/apply/application-admisison-registration", req.body)
      .then(({ data }) => {
        if (data) {
          rs(data);
        }
      })
      .catch((error) => {
        rj(error);
      });
  });

const applyApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult =
  (req: { body: any }) =>
    new Promise((rs, rj) => {
      request()
        .post(
          "/admission/apply/application-for-admission-consideration-according-to-the-competence-assessment-test-result",
          req.body
        )
        .then(({ data }) => {
          if (data) {
            rs(data);
          }
        })
        .catch((error) => {
          rj(error);
        });
    });

const applyApplicationForAdmissionWithAHighSchoolScript = (req: {
  body: any;
}) =>
  new Promise((rs, rj) => {
    request()
      .post(
        "/admission/apply/application-for-admission-with-a-high-school-script",
        req.body
      )
      .then(({ data }) => {
        if (data) {
          rs(data);
        }
      })
      .catch((error) => {
        rj(error);
      });
  });

const applyApplicationForStraightAdmissionAndPriorityConsideration = (req: {
  body: any;
}) =>
  new Promise((rs, rj) => {
    request()
      .post(
        "/admission/apply/application-for-straight-admission-and-priority-consideration",
        req.body
      )
      .then(({ data }) => {
        if (data) {
          rs(data);
        }
      })
      .catch((error) => {
        rj(error);
      });
  });

const AdmissionService = {
  applyApplicationAdmissionRegistration,
  applyApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult,
  applyApplicationForAdmissionWithAHighSchoolScript,
  applyApplicationForStraightAdmissionAndPriorityConsideration,
};

export default AdmissionService;
