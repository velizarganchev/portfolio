import { Component, OnDestroy, OnInit } from '@angular/core';
import { FadeInDirective } from '../../fade-in.directive';
import { TranslocoModule } from '@ngneat/transloco';

interface SkillItem {
  icon: string;
  label: string;
}

interface SkillGroup {
  key: 'frontend' | 'backend' | 'devops';
  label: string;
  items: SkillItem[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit, OnDestroy {
  /**
   * Skill groups shown in the skills section.
   * The grid always displays the currently active group.
   *
   * TODO: Make sure that all icon paths exist in /assets/img.
   */
  skillGroups: SkillGroup[] = [
    {
      key: 'frontend',
      label: 'Frontend',
      items: [
        {
          icon: '../../../assets/img/angular-skills.svg',
          label: 'Angular',
        },
        {
          icon: '../../../assets/img/nextjs.svg',
          label: 'Next.js',
        },
        {
          icon: '../../../assets/img/typescript-skills.svg',
          label: 'TypeScript',
        },
        {
          icon: '../../../assets/img/javScript-skills.svg',
          label: 'JavaScript',
        },
        {
          icon: '../../../assets/img/html-skills.svg',
          label: 'HTML',
        },
        {
          icon: '../../../assets/img/css-skills.svg',
          label: 'CSS',
        },
        {
          icon: '../../../assets/img/material-skills.svg',
          label: 'Material Design',
        },
        {
          icon: '../../../assets/img/scrum-skills.svg',
          label: 'Scrum',
        },
      ],
    },
    {
      key: 'backend',
      label: 'Backend',
      items: [
        {
          icon: '../../../assets/img/python.svg',
          label: 'Python',
        },
        {
          icon: '../../../assets/img/csharp.svg',
          label: 'C#',
        },
        {
          icon: '../../../assets/img/django.svg',
          label: 'Django',
        },
        {
          icon: '../../../assets/img/api-skills.svg',
          label: 'REST APIs',
        },
        {
          icon: '../../../assets/img/postgresql.svg',
          label: 'PostgreSQL',
        },
        {
          icon: '../../../assets/img/microsoftsqlserver.svg',
          label: 'Microsoft SQL Server',
        },
        {
          icon: '../../../assets/img/mongodb.svg',
          label: 'MongoDB',
        },
        {
          icon: '../../../assets/img/firebase-skills.svg',
          label: 'Firebase',
        },
      ],
    },
    {
      key: 'devops',
      label: 'DevOps & Cloud',
      items: [
        {
          icon: '../../../assets/img/docker.svg',
          label: 'Docker',
        },
        {
          icon: '../../../assets/img/git-skills.svg',
          label: 'Git',
        },
        {
          icon: '../../../assets/img/aws.svg',
          label: 'AWS',
        },
        {
          icon: '../../../assets/img/redis.svg',
          label: 'Redis',
        },
      ],
    },
  ];

  currentGroupIndex = 0;
  private rotationIntervalId: any = null;

  get currentGroup(): SkillGroup {
    return this.skillGroups[this.currentGroupIndex];
  }

  /**
   * Starts automatic rotation between skill groups.
   */
  ngOnInit(): void {
    this.startAutoRotate();
  }

  /**
   * Clears the interval when the component is destroyed.
   */
  ngOnDestroy(): void {
    this.stopAutoRotate();
  }

  /**
   * Manually set the active skill group and stop auto-rotation
   * so the user keeps control after interaction.
   */
  setGroup(index: number): void {
    if (index < 0 || index >= this.skillGroups.length) return;
    this.currentGroupIndex = index;
    this.stopAutoRotate();
  }

  private startAutoRotate(): void {
    this.stopAutoRotate();

    this.rotationIntervalId = setInterval(() => {
      this.currentGroupIndex =
        (this.currentGroupIndex + 1) % this.skillGroups.length;
    }, 5000); // 5s per group – adjust if needed
  }

  private stopAutoRotate(): void {
    if (this.rotationIntervalId) {
      clearInterval(this.rotationIntervalId);
      this.rotationIntervalId = null;
    }
  }
}
