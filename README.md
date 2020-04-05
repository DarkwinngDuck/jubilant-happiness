# jubilant-happiness
```
domain
    entity
        index.ts
        Entity.ts
        Entity.spec.ts
    value-object
        index.ts
        ValueObject.ts
        ValueObject.spec.ts
    user
        index.ts
        User.ts
        User.spec.ts
    team
        index.ts
        Team.ts
        Team.spec.ts
    department
        index.ts
        Department.ts
        Department.spec.ts
        
Events

Common operations (Departament, Team, User):
create
update
remove

Org
    Departament[]
        Team[]
            User[]
    
Departament
 addTeam
 removeTeam

Team
  addUser
  removeUser
  requestEnterDepartment
  
User
    changePassword
    requestEnterTeam
    lockUser
  
Aggregated Roots (Part II) read

User
- name
- login
- email
- password
- passwordChangeId (JWT)
- facebookId
- googleId
- githubId
- teamId
- locked (Date)

Team
- name
- departmentId

Department
- name

VO - use configs to modify behaviour
```
