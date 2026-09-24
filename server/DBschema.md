## DATABASE RELATIONSHIPS AND SCHEMA



enum Plan{
    BASIC
    PRO
}

Table plans{
  id                 string               [primary key]   
  plan               Plan
  price              Int
}

---------------------------------------------------------------------------

Table users {
  id                 string    [primary key]
  email              string    [unique]
  passwordHash       string
  created_at         DateTime
  isActive           Boolean   @default(false)
}


Table members{
  id varchar [primary key]
  user_id varchar [not null]
}

Ref: members.user_id > users.id


---------------------------------------------------------------------------

Table teams {
  id varchar  [primary key]
  name varchar(50)
  description varchar(255)

}

Table team_members{
  team_id varchar [not null]
  member_id varchar [not null]
}

Ref: team_members.member_id > members.id 
Ref: team_members.team_id > teams.id

Table organizations{
  id varchar [primary key]
  description varchar
  team_id varchar [not null]
  member_id varchar [not null]
}

Ref: organizations.member_id > members.id
Ref: organizations.team_id > teams.id


Table 

```








--------------------------------------------


SCHEMA.PRISMA


////////// Project Model  ////////////


model Project{
  id             String            @id      @default(cuid())  
  name           String
  description    String?      
  teams          Team[]
  members        Member[]

}


//////// Subscription Model ////////////

enum SubscriptionPlan{
  BASIC
  PRO
}

model Subscription{
  id            String               @id      @default(cuid())
  subscription  SubscriptionPlan      
  price         Int
  isActive      Boolean       @default(false)
  userId        String        @unique
  user          User          @relation(fields: [userId], references: [id])
}

//////// User Model ///////////

model User{
  id            String            @id      @default(cuid())
  name          String 
  email         String            @unique
  passwordHash  String   
  subscription  Subscription?  
  member        Member[]
}

//////// Member Model ///////////

model Member{
  id             String            @id      @default(cuid())
  userId         String            @unique
  user           User              @relation(fields: [userId], references:[id])
  teams          Team[]          
}


////////// Organization Model  ////////////

model Organization{ 
  id             String            @id      @default(cuid())  
  name           String
  description    String?      
  teams          Team[]
}

////////// Team Model  ////////////

model Team{ 
  id             String            @id      @default(cuid())  
  name           String
  description    String?      
}

