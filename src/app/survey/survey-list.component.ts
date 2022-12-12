import { Component } from "@angular/core";
import { ISurvey } from "./ISurvey";
import { IQuestionAnswerList } from "./IQuestionAnswerList";

@Component({
    selector: 'sm-surveys',
    templateUrl: './survey-list.component.html'
})
export class SurveyListComponent {
    pageTitle: string = 'Survey List'
    surveyDeleted = false;
    listFilter: string = ''
    surveys: ISurvey[] = [
        {
            surveyId: 1,
            surveyName: "survey 1",
            patientId: 1,
            IQuestionAnswerList: [
            ]
        },
        {
            surveyId: 1,
            surveyName: "survey 2",
            patientId: 2,
            IQuestionAnswerList: []   
 } ]

 auestionAnswerList: IQuestionAnswerList[] = [{
    questionId: 1,
        questionText: "question text 1",
        questionAnswer: "question answer 1"
 },{
 questionId: 2,
 questionText: "question text 2",
 questionAnswer: "question answer 2"
 }];

    deleteSurvey(): void {
        if (this.surveyDeleted == false){
        this.surveyDeleted = true;
        this.pageTitle = 'set to true';

        } else {
            this.surveyDeleted = false;
            this.pageTitle = 'set to false';
        }
    }
}