import { Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function Essay() {
  return (
    <Grid xsOffset={3} xs={6}>
      <Card variant="outlined">
        <>
          <CardContent className="essay">
            <Typography variant="h4" component="div">
              The Relationship Between Talent and Ambition
            </Typography>
            <Typography className="paragraph" variant="body2">
              In the movie Fame, a young man is famed as a performer in a
              Broadway play. He is on the cusp of stardom, but he doesn't seem
              to have a clue how to get there. He struggles to understand what
              it means to be a star. In the end, he realizes that he has talent
              and ambition- but he must use both gifts effectively to reach his
              goal. Talent and ambition are closely intertwined- and it is
              important for people to understand this.
            </Typography>
            <Typography className="paragraph" variant="body2">
              The word 'talent' has become a buzzword in our society. Everyone
              wants to have a talent, but many people do not know what that
              means. Some believe that talent is a natural ability that you were
              born with. Others think that talent is something you learn from an
              early age. Either way, people think that talent can help you reach
              your goals. However, talent is only useful when you use it. The
              primary problem with talent is that it can be misleading. A person
              may have talent for singing, but they will probably fail without
              proper training.
            </Typography>
            <Typography className="paragraph" variant="body2">
              An ambition that directs your talent towards the right goals is
              essential for success. George Washington was a gifted military
              leader who shouldered the burden of leading the Continental Army
              to victory. Washington had no natural charisma; he was not a
              natural leader like his mentor, Patrick Henry. Washington's
              ambition directed his talent into the right direction and led him
              to victory in the Revolutionary War. In turn, Washington's success
              as a leader inspired many Americans to fight for their rights as
              well. George Washington learned early on that ambition could help
              you reach your dreams. Blind ambition can lead you down the wrong
              path if you do not know what you are doing. Many people with great
              potential will spend their entire lives pursuing their dreams
              without ever realizing their full potential. Many people have good
              intentions when they set out on an ambitious journey, but they
              lack the knowledge or discipline to succeed. A person may have an
              impressive list of accomplishments, but that does not make them
              successful if they are not applying those gifts in the right way.
              A talented person could be ruining their gifts by being
              unambitious and careless with their successes.
            </Typography>
            <Typography className="paragraph" variant="body2">
              It is important for people to understand that both talent and
              ambition are crucial for success. Without talent, a person cannot
              use their ambition to succeed; without ambition, a person cannot
              direct their talents towards a goal they want to achieve. Both
              talents and ambitions should be used wisely and effectively if
              people want to succeed in life.
            </Typography>
          </CardContent>
        </>
      </Card>
    </Grid>
  );
}

export default Essay;
