import queries from './queries';
import { genHash } from '../../services/bcrypt';
import { sign } from '../../services/jwt';
import { userTokenView, userView } from '../../utils/dataViews';

export const unique = async ({ body }, res, next) => {
  try {
    const { email } = body;
    const user = await queries.unique(email);
    if (user) {
      return res.json({ success: false, error: 'User already exists' });
    }
    next();
  } catch (error) {
    console.log('\n\nERROR ========>', error, '\n\n');
    return res.json({ error });
  }
};

export const register = async ({ body }, res) => {
  try {
    const user = body;
    user.password = await genHash(user.password);
    const userInfo = await queries.register(user);
    const accessToken = await sign(userTokenView(userInfo));
    return res.json({
      success: true,
      data: { user: userView(userInfo), accessToken },
    });
  } catch (error) {
    console.log('\n\nERROR ========>', error, '\n\n');
    return res.json({ error });
  }
};

export const signIn = async ({ user }, res) => {
  try {
    user = userView(user);
    const accessToken = await sign(userTokenView(user));
    return res.json({ user, accessToken });
  } catch (error) {
    console.log('\n\nERROR ========>', error, '\n\n');
    return res.json({ error });
  }
};

export const signOut = async (req, res) => {
  try {
    req.logout();
    return res.json({ status: 200 });
  } catch (error) {
    console.log('\n\nERROR ========>', error, '\n\n');
    return res.json({ error });
  }
};
